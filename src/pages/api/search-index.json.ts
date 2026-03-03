import type { APIRoute } from 'astro'
import { getAllEvents, getAllPosts } from '@/lib/data-utils'

export const prerender = true

export const GET: APIRoute = async () => {
  try {
    const posts = await getAllPosts()
    const events = await getAllEvents()

    const searchIndex = {
      "posts": posts.map((post) => {
        // Extract text content from HTML body (remove tags)
        // The body property contains the raw HTML content
        const htmlContent = (post as { body?: string }).body || ''
        const textContent = htmlContent
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()

        return {
          id: post.id || '',
          title: post.data.title || '',
          description: post.data.description || '',
          date: post.data.date?.toISOString() || new Date().toISOString(),
          tags: post.data.tags || [],
          authors: post.data.authors || [],
          url: `/blog/${post.id}`,
          // Include full content for better search results
          content: textContent, // Full content for indexing
        }
      }),
      "events": events.map((event) => {
        // Extract text content from HTML body (remove tags)
        // The body property contains the raw HTML content
        const htmlContent = (event as { body?: string }).body || ''
        const textContent = htmlContent
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()

        return {
          id: event.id || '',
          title: event.data.title || '',
          description: event.data.description || '',
          date: event.data.date?.toISOString() || new Date().toISOString(),
          type: event.data.type,
          url: `/events/${event.id}`,
          // Include full content for better search results
          content: textContent, // Full content for indexing
        }
      }),
    }


    return new Response(JSON.stringify(searchIndex), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch (error) {
    console.error('Error generating search index:', error)
    // Return empty array on error instead of failing
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  }
}
